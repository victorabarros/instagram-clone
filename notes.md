# instagram clone notes

https://github.com/academy-notJust-dev/AcademyInstagram

## 2.1 Initialize the React Native

https://academy.notjust.dev/products/instagram-clone/categories/2149458147/posts/2154542669

### troubleshotting: how run react-native on android device

https://reactnative.dev/docs/running-on-device#1-enable-debugging-over-usb-2

```text
To enable USB debugging on your device, you will first need to enable the "Developer options" menu by going to Settings → About phone → Software information and then tapping the Build number row at the bottom seven times. You can then go back to Settings → Developer options to enable "USB debugging".
```

run `touch android/local.properties`

```conf
ANDROID_SDK_ROOT=/home/victor/Android/Sdk
sdk.dir=/home/victor/Android/Sdk
```

### how to run

run `npx react-native start` and in a separate terminal run `npx react-native run-android`

## 2.2

theme

## 2.3

vector icons
https://oblador.github.io/react-native-vector-icons/

## 3.12

https://react-hook-form.com/get-started#ReactNative

## 4.8

`useSafeAreaInsets`

## 6.4 and 6.5

sign in with social medias (facebook and google) using aws amplify plus cognito
how create privacy policies: https://app.privacypolicies.com/

### 6.6 in app auth

https://docs.amplify.aws/lib/auth/social/q/platform/js/
https://docs.amplify.aws/lib/auth/social/q/platform/js/#full-samples

## 7.6 Setup Appolo client

const { data, loading, error } = useQuery(gql`...`) => (from apollo client) this whay is no longer necessary useState because of the loading indicator

## 7.8 User unique uername

useLazyQuery https://github.com/academy-notJust-dev/AcademyInstagram/blob/8984a224291eb40340bb2876ab5bfea2be8f6860/src/screens/EditProfileScreen/EditProfileScreen.tsx#L18

## 7.9 Posts CRUD

useMutation frmo @apollo/client
yarn add react-native-popup-menu

## continue from

https://academy.notjust.dev/products/instagram-clone/categories/2150534637/posts/2158608376

## office hours

- question: Suggestion to start as a freelancer? My case already has a job, so it could be more then 10h/week.
