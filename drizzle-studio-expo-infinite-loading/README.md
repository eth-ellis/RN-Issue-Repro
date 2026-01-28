# Repro steps

## Drizzle studio not working

1. Ensure the `expo` package version is set to `54.0.32`
2. Run `npm install`
3. Run the app i.e. `npx expo run:ios`
4. In the console press `shift + m` to open the dev tools menu
5. Select the `Open expo-drizzle-studio-plugin` option
6. Observe drizzle studio infinitely loading

## Drizzle studio working

1. Ensure the `expo` package version is set to `54.0.31`
2. Follow **steps 2 to 5** from the previous section
3. Observe drizzle studio loading successfully

# Observations

When drizzle studio is infinitely loading, constant `broadcast` requests are fired in the browser dev tools under the network tab.

The `broadcast` request is only fired once when drizzle studio loads successfully.

Also, in the node console a warning is output for the below expo code:

``` js
// WebSocketWithReconnect.js

if (this.retries >= this.maxRetries) {
    this.onError(new Error('Exceeded max retries'));
    this.close();
    return;
}
```