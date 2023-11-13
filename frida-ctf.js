Java.perform(function() {
    let NativeLib = Java.use("com.example.nightwolfapp.NativeLib");

    let MainActivity = Java.use("com.example.nightwolfapp.MainActivity");
    MainActivity["onCreate"].implementation = function (bundle) {
        console.log(this);
        console.log(MainActivity.onCreate is called: bundle=${bundle});
        this["onCreate"](bundle);
    };

    // Create an instance of NativeLib
    var nativeLibInstance = NativeLib.$new();

    var signupResult = nativeLibInstance.signup('username', 'password', 'email');
    console.log('Signup Result: ' + signupResult);
    
    // Example usage of signin and signup methods
    var signinResult = nativeLibInstance.signin('username', 'password');
    console.log('Signin Result: ' + signinResult);

    // Call the methods
    var flag = nativeLibInstance.getFlag();
    console.log('Flag: ' + flag);
});