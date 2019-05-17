# React Native App for Borsuque Squad
Author: Jakub Łośko

## Installation

React Native installation guide: [link.](https://facebook.github.io/react-native/docs/getting-started.html)
## 1. Install [NodeJS](https://nodejs.org/en/#download), [Python2](https://www.python.org/downloads/), a [JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html), and [Android Studio](https://developer.android.com/studio/index.html).
When installing Android Studio make sure the boxes next to all of the following are checked:

* ```Android SDK```
* ```Android SDK Platform```
* ```Performance (Intel ® HAXM)``` [(See here for AMD)](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html)
* ```Android Virtual Device```

After Android Studio is installed go to the SDK Manager which can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the ```Android 9 (Pie) entry```, then make sure the following items are checked:

* ```Android SDK Platform 28```
* ```Intel x86 Atom_64 System Image``` or ```Google APIs Intel x86 Atom System Image```

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that ```28.0.3``` is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

### Configure the ANDROID_HOME environment variable ###

The React Native tools require some environment variables to be set up in order to build apps with native code.

Open the System pane under **System and Security** in the **Windows Control Panel**, then click on **Change settings....** Open the **Advanced** tab and click on **Environment Variables...** Click on **New...** to create a new ```ANDROID_HOME``` user variable that points to the path to your Android SDK:

![ANDROID_HOME Environment Variable](https://facebook.github.io/react-native/docs/assets/GettingStartedAndroidEnvironmentVariableANDROID_HOME.png)

The SDK is installed, by default, at the following location:

```c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk```

You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under **Appearance & Behavior → System Settings → Android SDK**.

### Add platform-tools to Path ###
Open the System pane under **System and Security** in the Windows Control Panel, then click on **Change settings...** Open the **Advanced** tab and click on **Environment Variables...** Select the **Path** variable, then click **Edit**. Click **New** and add the path to platform-tools to the list.

The default location for this folder is:

```c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\platform-tools```


## 2. Install react-native-cli:
```bash
npm install -g react-native-cli
```

## 3. Download node modules in the project's root folder:
```bash
npm install
```
or if you use yarn:
```bash
yarn install
```

## 4. Connect your device (either physical or virtual) and run the application:

```bash
react-native run-android
```


