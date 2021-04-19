# Introduction 
Continuation from previous student's project.
Emotion data from the ML API is evaluated and stored, along with other data, in a DB accessed via the DB API. From there, to retrieve that data and display it into a chart created using Chart.js inside a new Analysis Tab within a copy of the SLP app used only by instructors. This Analysis Tab is found when viewing a question from any assignment.

The purpose of this implementation is so that instructors can view the emotions felt by their students when they are viewing a discussion image.

# Getting Started
1. $ npm install -g @ionic/cli
2. $ npm install -g cordova
3. Connect a mobile device to the computer and allow USB debugging on the device
4. Run the app using ionic cordova run android --device

# Set Up camera permissions
Navigate to \platforms\android\app\src\main\AndroidManifest.xml and add new permissions.
<uses-feature android:name="android.hardware.camera" />
<uses-feature android:name="android.hardware.camera.autofocus" />
<uses-feature android:name="android.hardware.camera2.full" />
<uses-feature android:name="android.hardware.camera2.autofocus" />
Allow camera permissions for application manually in phone settings


# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)