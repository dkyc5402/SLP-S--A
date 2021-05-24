import { Component, OnInit, NgZone, ViewChild, SecurityContext } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from '../../services/assignments.service';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { SessionAssignmentChatPage } from '../../pages/session-assignment-chat/session-assignment-chat.page';
import { Storage } from '@ionic/storage';
import { NetworkService } from '../../services/network.service';
import { apiurl, SessionStatus } from '../../model/global-api';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalService } from '../../services/global.service';
import { SessionViewImageDiscussionPage } from '../shared-module/session-view-image-discussion/session-view-image-discussion.page';
import { SessionMyPage } from '../session-my/session-my.page';
import { Observable } from 'rxjs/internal/Observable';
import { HTTP } from '@ionic-native/http/ngx';
import { TestBed } from '@angular/core/testing';
import { Chart } from 'chart.js';
import { empty } from 'rxjs';
@Component({
  selector: 'app-session-assignment-view',
  templateUrl: './session-assignment-view.page.html',
  styleUrls: ['./session-assignment-view.page.scss'],
})
export class SessionAssignmentViewPage implements OnInit {
  textdisplay: any;
  assignlist: any;
  ChangeDetectorRef: any;
  test: any;
  test2: any;
  refreshvalue: boolean = false;
  test3: any;
  @ViewChild('barChart') barChart;
  @ViewChild('cardChart') cardChart;
  bars: any;
  sValue: any;
  sOrder: any;

  constructor(private ngZone: NgZone, private nativeHttp: HTTP, private globalService: GlobalService, private platform: Platform, private sessionmypage: SessionMyPage, public loadingController: LoadingController, public dms: DomSanitizer, private router: Router, private activatedRoute: ActivatedRoute, private modalController: ModalController, private assignmentsService: AssignmentsService, private storage: Storage, private networkService: NetworkService) { }
  loading: any;
  //Segment
  segmentModel = "assignment"; isactiveassignment: string; isactivevideoorvoice: string; isactiveanalysis: string; asgmtid: any; sessionid: any;
  //User Info
  token: any; studentid: any; tutornamefordisplay: any;
  asgmtlist: any; sessionstatusended: any; sessionstatus: any; imgdisplayinapp: any; asgmtdiscusslist: any; discussimgdisplayinapp: any;
  ngOnInit() {
    //Segment
    console.log('this.router.url', 'this.rout')
    this.isactiveassignment = "activesegment";
  }

  ionViewWillEnter() {
    this.token = this.globalService.getselectedtoken()
    this.studentid = this.globalService.getselectedStudentId()
    this.getAssignmentList();
    this.tutornamefordisplay = this.assignmentsService.getselectedtutorname()
  }
  ionViewDidEnter() {

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/session-view/session-view/' + this.sessionid)
    });

  }

  /*Get AssignmentList*/
  getAssignmentList() {
    this.sessionstatusended = SessionStatus.SESSION_STATUS_ENDED;
    // Get the ID that was passed with the URL
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.getAll('id')
      this.sessionid = id;
    })
    this.activatedRoute.paramMap.subscribe(params => {
      let asgmtid = params.getAll('asgmtid')
      this.asgmtid = asgmtid;
    })

    this.sessionstatus = this.assignmentsService.getselectedsessionstatus();
    this.storage.get('assignmentdetails').then((val) => {
      val.forEach((valor) => {
        if (this.asgmtid == valor.asgmt_Id) {
          this.asgmtlist = valor;
          this.imgdisplayinapp = this.display(valor.asgmt_Data)
          this.asgmtdiscusslist = this.asgmtlist.assignmentDiscussions;

        }
      })
    });

  }



  async UpdateData(event) {
    this.sessionstatusended = SessionStatus.SESSION_STATUS_ENDED;


    this.token = this.globalService.getselectedtoken()
    this.studentid = this.globalService.getselectedStudentId()
    this.sessionstatus = this.assignmentsService.getselectedsessionstatus();

    let header = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    let fetchinfo = { "Authentication_Token": this.token, "Student_Id": this.studentid, "inDepth": "Y" }
    this.nativeHttp.setDataSerializer('json');
    this.nativeHttp.post(apiurl.apiUrl + 'session/mySessions', fetchinfo, header).then(response => {
      try {
        response.data = JSON.parse(response.data);//whole asgmtlist of particular session ,returns a promise
        this.storage.set('AssignmentDiscussion', response.data).then(val => {
          this.storage.get('AssignmentDiscussion').then((val) => {
            // console.log('storage get',this.storage.get('AssignmentDiscussion'))
            val.forEach((valor) => {
              this.test = valor.assignments;
              this.test.forEach(valor2 => {
                this.test2 = valor2.asgmt_Id;
                if (this.asgmtid == this.test2) {
                  this.test = valor2.assignmentDiscussions;
                  this.test3 = valor2
                  console.log('this is the apilist', this.test.created_On)

                  this.imgdisplayinapp = this.display(this.test3.asgmt_Data)
                  this.asgmtdiscusslist = this.test;
                }
              });
            })
          })
          event.target.complete();
        })
      }
      catch (e) {
        console.error('JSON parsing error');
        this.assignmentsService.presentError()
        setTimeout(() => {
          event.target.complete()
          this.router.navigateByUrl('tabs/main');

        }, 3000);
      }

    }).catch(response => {
      // prints 403
      console.log(response.status, ' errorsss');
      // prints Permission denied
      console.log(response.error, ' error');
      this.assignmentsService.presentError()
      setTimeout(() => {
        event.target.complete()
        this.router.navigateByUrl('tabs/main');

      }, 3000);
    });

  }

  // refreshing(){
  //   this.ngZone.run(() => {
  //     this.refreshvalue = true;
  //   })
  // }


  /*Segment */
  segmentChanged(event) {
    if (this.segmentModel == "conferencing") {
      this.isactiveassignment = "inactivesegment";
      this.isactivevideoorvoice = "activesegment";
      this.isactiveanalysis = "inactivesegment";
    }
    else if (this.segmentModel == "assignment") {
      this.isactiveassignment = "activesegment";
      this.isactivevideoorvoice = "inactivesegment";
      this.isactiveanalysis = "inactivesegment";
    }
    else if (this.segmentModel == "analysis") {
      this.isactiveassignment = "inactivesegment";
      this.isactivevideoorvoice = "inactivesegment";
      this.isactiveanalysis = "activesegment";

      this.createBarChart();
      this.presentLoading();
    }
  }
  /*Chat Pop up*/
  async presentModal(ev: any) {
    const popover = await this.modalController.create({
      component: SessionAssignmentChatPage,
      cssClass: 'small-modal',
      backdropDismiss: true
    });
    return await popover.present();
  }
  /*Edit Drawing*/
  EditDrawing() {
    if (this.networkService.online == false) {
      this.networkService.presentNetworkMsg();
    }
    else {
      this.assignmentsService.presentDrawing('Cancel', 'Confirm').then((res) => {
        if (res === 'Confirm') {
          this.router.navigateByUrl('/tabs/session-view/session-assignment-edit/' + this.sessionid + '/' + this.asgmtid);
          //Drawing Page
        }
      });
    }
  }
  /*Open Chat*/
  StayonPage(asgmtid) {
    if (this.networkService.online == false) {
      this.networkService.presentNetworkMsg();
    }
    else {
      this.assignmentsService.setselectedasgmtid(asgmtid);
      this.presentModal(event);
    }
  }
  PreviousPage() {
    if (this.networkService.online == false) {
      this.networkService.presentNetworkMsg();
    }
    else {
      this.router.navigateByUrl('/tabs/session-view/session-view/' + this.sessionid);
    }
  }
  //Image Sanitize
  display(bImg: string) {
    return this.dms.bypassSecurityTrustResourceUrl("data:image/png;base64, " + bImg)
  }
  //Loading Pop up
  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
      message: 'Please Wait',
      cssClass: 'custom-class custom-loading',
      duration: 60000,
      backdropDismiss: true,
    });
    // Present the loading controller

    await this.loading.present();
  }





  //Display Image 
  async presentModalImage(imgdisplayinapp) {
    const modal = await this.modalController.create({
      component: SessionViewImageDiscussionPage,
      componentProps: {
        imagedisplay: this.imgdisplayinapp,
        discussimgdisplayinapp: this.asgmtlist.asgmtDiscuss_Data
      }
    });
    return await modal.present();
  }
  async presentModalDiscussImage(imgdisplayinapp) {
    const modal = await this.modalController.create({
      component: SessionViewImageDiscussionPage,
      componentProps: {
        imagedisplay: this.display(imgdisplayinapp),
      }
    });
    return await modal.present();
  }

  getSort() {
    //function updates sValue and sOrder
    this.sOrder;
    this.sValue;
    console.log("values have been updated: ", this.sValue, this.sOrder);
    this.createBarChart();
  }


  sortEntry(entry) {
    var data = entry;
    var order = this.sOrder;
    var val = this.sValue;

    // default no sort to load
    if (order == null) {
      return entry;
    }
    //if to be sorted
    if (order == "asec") {
      if (val == "bored") {
        data.sort((a, b) => Number(a.boredomDuration) - Number(b.boredomDuration));
      } else if (val == "frus") {
        data.sort((a, b) => Number(a.frustDuration) - Number(b.frustDuration));
      } else if (val == "total") {
        data.sort((a, b) => Number(a.duration) - Number(b.duration));
      }
    } else if (order == "desc") {
      if (val == "bored") {
        data.sort((a, b) => Number(b.boredomDuration) - Number(a.boredomDuration));
      } else if (val == "frus") {
        data.sort((a, b) => Number(b.frustDuration) - Number(a.frustDuration));
      } else if (val == "total") {
        data.sort((a, b) => Number(b.duration) - Number(a.duration));
      }
    }
    return data;

  }

  createBarChart() {
    let ctx = this.barChart.nativeElement
    let jsonData = {
      Authentication_Token: this.token,
      Asgmt_Id: this.asgmtid[0],
      // even tho asgmtDiscuss_Id needs to be specified, 
      // the api will return data from all asgmtDiscuss_Ids. No need to iterate through
      AsgmtDiscuss_Id: this.asgmtdiscusslist[0].asgmtDiscuss_Id
    }

    this.fetchChartData(jsonData).then(fetchData => {
      let latestFirstData = fetchData.reverse()
      console.log("before sorted", latestFirstData)
      latestFirstData = this.sortEntry(latestFirstData);
      console.log("after sorted", latestFirstData)

      let xAxisLabels = [];
      let boredDurData = [];
      let frusDurData = [];
      let totalDurData = [];

      for (var i = 0; i < latestFirstData.length; i++) {
        let entry = latestFirstData[i]

        let tmp = entry.student_Username + ", " + entry.asgmtDiscuss_Id.substring(0, 6)
        boredDurData.push(entry.boredomDuration)
        frusDurData.push(entry.frustDuration)
        totalDurData.push(entry.duration)
        xAxisLabels.push(tmp)
      }


      // Bar Chart creation
      this.bars = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels: xAxisLabels,
          datasets: [{
            label: "Bored",
            data: boredDurData,
            backgroundColor: 'rgb(212, 168, 110)',
            hoverBackgroundColor: 'rgb(145, 113, 70)'

          },
          {
            label: "Frustrated",
            data: frusDurData,
            backgroundColor: 'rgb(255, 105, 105)',
            hoverBackgroundColor: 'rgb(173, 64, 64)'
          },
          {
            label: "Total",
            data: totalDurData,
            backgroundColor: 'rgb(47, 196, 50)',
            hoverBackgroundColor: 'rgb(35, 145, 37)'
          }],
          // y-axis label 
          // yAxes: [{
          //   display: true,
          //   scaleLabel: {
          //     display: true,
          //     hoverBackgroundColor: 'rgb(199, 178, 174 )'
          //   }
          // }]
        },
        options: {
          legend: {
            display: true,
            position: "top",
            align: "end"
          },
          tooltips: {
            enabled: false,
            backgroundColor: 'rgba(255,255,255,1)',
            borderColor: 'rgba(20,100,124)',
            borderWidth: 1,
            custom: (tooltipModel) => {
              // Tooltip Element
              var tooltipEl = document.getElementById('tapPopupInfo');

              // Hide if no tooltip
              if (tooltipModel.opacity === 0) {
                tooltipEl.style.visibility = "hidden";
                if (document.getElementById("helpText") != null) {
                  document.getElementById("helpText").style.display = "block"
                  document.getElementById("helpText").style.visibility = "visible"
                }
                return;
              }

              function getBody(bodyItem) {
                return bodyItem.lines;
              }

              function getSelectedValuesArray(bodyLines) {
                var puData = [];
                bodyLines.forEach(getValues);

                function getValues(value, index, array) {
                  var v = value[0].split(':')[1];
                  puData.push(parseInt(v));
                }

                console.log('puData:', puData);
                return puData;
              }

              function generateTooltipChart(valueArray, student, agsmtId) {
                var bored = valueArray[0];
                var frus = valueArray[1];
                var total = valueArray[2];
                var title = 'Student: ' + student + " Discuss ID: " + agsmtId;
                var canvas = <HTMLCanvasElement>document.getElementById("tooltipChart");
                var tooltipCTX = canvas.getContext("2d");
                new Chart(tooltipCTX, {
                  type: 'horizontalBar',
                  data: {
                    labels: ["Emotion Data"],
                    datasets: [
                      {
                        label: "Bored",
                        backgroundColor: "rgb(212, 168, 110)",
                        data: [bored]
                      },
                      {
                        label: "Frustrated",
                        backgroundColor: "rgb(255, 105, 105)",
                        data: [frus]
                      },
                      {
                        label: "Total",
                        backgroundColor: "rgb(47, 196, 50)",
                        data: [total]
                      }
                    ]
                  },
                  options: {
                    layout: {
                      padding: {
                        right: 20
                      }
                    },
                    scales: {
                      xAxes: [{
                        gridLines: {
                          display: false
                        },
                        ticks: {
                          display: false
                        }
                      }],
                      yAxes: [{
                        gridLines: {
                          display: false
                        }, ticks: {
                          display: false
                        }
                      }]
                    },
                    legend: { display: true, position: "bottom" }, animation: {
                      duration: 1,
                      onComplete: function () {
                        var chartInstance = this.chart,
                          ctx = chartInstance.ctx;
                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize,
                          Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';


                        this.data.datasets.forEach(function (dataset, i) {
                          var meta = chartInstance.controller.getDatasetMeta(i);
                          meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x + 10 , bar._model.y + 7 );
                          });
                        });
                      }

                    },
                    title: {
                      display: true,
                      text: title
                    }
                  }
                });

              }

              // Set Text
              if (tooltipModel.body) {
                var titleLines = tooltipModel.title || [];
                var studentName = titleLines[0].substring(0, titleLines[0].indexOf(","))
                var asgmtDiscussId = titleLines[0].substring(titleLines[0].indexOf(",") + 2, titleLines[0].length)

                var bodyLines = tooltipModel.body.map(getBody);
                var selectedValues = getSelectedValuesArray(bodyLines);

                let imgSrc;

                // getting img of asgmtDisc
                for (var i = 0; i < this.asgmtdiscusslist.length; i++) {
                  var chartTitle = tooltipModel.title[0].substring(tooltipModel.title[0].indexOf(",") + 1, tooltipModel.title[0].length).trim()
                  if (this.asgmtdiscusslist[i].asgmtDiscuss_Id.substring(0, 6) == chartTitle) {
                    imgSrc = this.asgmtdiscusslist[i].asgmtDiscuss_Data
                  }
                }


                var innerHtml = '<ion-row id="helpText"></ion-row>'
                let sanitisedImg = this.dms.sanitize(SecurityContext.HTML, this.dms.bypassSecurityTrustHtml("data:image/png;base64, " + imgSrc));
                innerHtml += '<ion-card class="popUp"><ion-row><ion-col><img src="' + sanitisedImg
                  + '" alt="google"></img> </ion-col></ion-row>'

                innerHtml += '<div><canvas id="tooltipChart"></canvas></div>'
                // innerHtml += '<ion-row><table><tbody>';
                // innerHtml += '<ion-card-header><ion-card-subtitle><tr><td>Student: ' + studentName + '</td></tr></ion-card-subtitle>'
                // innerHtml += '<ion-card-title><tr><td>Discuss Id: ' + asgmtDiscussId + '</td></tr></ion-card-title></ion-card-header><ion-card-content>'



                // bodyLines.forEach(function (body, i) {
                //   var colors = tooltipModel.labelColors[i];
                //   var style = 'background:' + colors.backgroundColor;
                //   style += '; border-color:' + colors.borderColor;
                //   style += '; border-width: 2px'
                //     + ";display: inline-block;width: 10px;height: 10px;margin-right: 10px;"
                //   var span = '<span style="' + style + '"></span>';
                //   innerHtml += '<tr><td>' + span + body + '</td></tr>';
                // });
                // innerHtml += '</tbody></table></ion-col></ion-row> </ion-card-content></ion-card>';

                tooltipEl.innerHTML = innerHtml;

                generateTooltipChart(selectedValues, studentName, asgmtDiscussId);
              }

              // `this` will be the overall tooltip
              var position = ctx.getBoundingClientRect();

              // Display, position, and set styles for font
              tooltipEl.style.visibility = "visible";
              tooltipEl.style.color = "black";
              // tooltipEl.style.transition = "all 0.2s ease";

              document.getElementById("helpText").style.display = "none"
            }
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                  beginAtZero: true
                }
              }],
          },
          maintainAspectRatio: false
        }
      })

      this.loading.dismiss();
      document.getElementById("helpText").style.display = "block"

      // Complicated looking but it's essentially just maintaining the bar sizes for every dataset to be consistent
      // since they vary in length and will look weird if scaled normally.
      var fiddleFactor = 1.05
      var ratio = xAxisLabels.length * fiddleFactor / 15
      var containerHeight = 1026
      var chartWrapper = document.getElementById("chartWrapper")
      var height = 300
      var calcHeight = containerHeight * ratio
      if (calcHeight < height) {
        calcHeight = height
      }
      chartWrapper.style.height = calcHeight + "px"
    })
  }
  fetchChartData(jsonData) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
    var proxyUrl = "https://serene-shelf-84252.herokuapp.com/" //proxy for CORS
    var dbApiUrl = "https://fspslpuws.azurewebsites.net/api/analysis/viewAnalysisAsgmtDiscuss"

    return fetch(proxyUrl + dbApiUrl, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(jsonData),
      redirect: "follow"
    }).then(resp => resp.json())

    // return Promise.all(jsonDataArray.map(jsonData =>
    //   fetch(proxyUrl + dbApiUrl, {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: JSON.stringify(jsonData),
    //     redirect: 'follow'
    //   }).then(resp => resp.json())
    // ))
  }

}