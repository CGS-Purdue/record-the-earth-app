
# router options



  **initialRouteName**        - Sets the default screen of the stack.
                             Must match one of the keys in route configs.

  **initialRouteParams**      - The params for the initial route

  **initialRouteKey**         - Optional identifier of the initial route

  **navigationOptions**       - Navigation options for the navigator itself,
                               to configure a parent navigator
  **title**                        String that can be used as a fallback for headerTitle. Additionally, will be used as a fallback for tabBarLabel (if nested in a TabNavigator) or drawerLabel (if nested in a DrawerNavigator).

   **header**                       React Element or a function that given HeaderProps returns a React Element, to display as a header. Setting to null hides header.

   **headerTitle**                  String, React Element or React Component used by the header. Defaults to scene title. When a component is used, it receives allowFontScaling, style and children props. The title string is passed in children.

   **headerTitleAllowFontScaling**  Whether header title font should scale to respect Text Size accessibility settings. Defaults to true.

   **headerBackAllowFontScaling**   Whether back button title font should scale to respect Text Size accessibility settings. Defaults to false.

   **headerBackImage**              React Element or Component to display custom image in header's back button. When a component is used, it receives a number of props when rendered (tintColor, title). Defaults to Image component with react-navigation/views/assets/back-icon.png back image source, which is the default back icon image for the platform (a chevron on iOS and an arrow on Android).

   **headerBackTitle**              Title string used by the back button on iOS, or null to disable label. Defaults to the previous scene's headerTitle. headerBackTitle has to be defined in the origin screen, not in the destination screen. For instance, when you have a transition A to B and you want to disable the headerBackTitle on B:

  **defaultNavigationOptions** - Default navigation options to use for screens

  **paths** - A mapping of overrides for the paths set in the route configs

  **disableKeyboardHandling** - If true, the keyboard will NOT automatically dismiss when navigating to a new screen.
                          Defaults to false. This is ignored in the web platform.


# Visual options:

  **mode** - Defines the style for rendering and transitions:

      **card** - Use the standard iOS and Android screen transitions. This is the default.

      **modal** - Make the screens slide in from the bottom which is a common iOS pattern. Only works on iOS, has no effect on Android.

  **headerMode** - Specifies how the header should be rendered:

      **float** - Render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.

      **screen** - Each screen has a header attached to it and the header fades in and out together with the screen. This is a common pattern on Android.

      **none** - No header will be rendered.

  **headerBackTitleVisible** - A reasonable default is supplied for whether the back button title should be visible or not, but if you want to override that you can use true or false in this option.

  **headerTransitionPreset** - Specifies how the header should transition from one screen to another when headerMode: float is enabled.

  **fade-in-place** - Header components cross-fade without moving, similar to the Twitter, Instagram, and Facebook app for iOS. This is the default value.

  **uikit** - An approximation of the default behavior for iOS.

  **headerLayoutPreset** - Specifies how to lay out the header components.

  **left** - Anchor the title to the left, near the back button or other left component. This is the default on Android. When used on iOS, the header back title is hidden. Content from the left component will overflow underneath the title, if you need to adjust this you can use headerLeftContainerStyle and headerTitleContainerStyle. Additionally, this alignment is incompatible with headerTransitionPreset: 'uikit'.

  **center** - Center the title, this is the default on iOS.

  **cardStyle** - Use this prop to override or extend the default style for an individual card in stack.

  **cardShadowEnabled** - Use this prop to have visible shadows during transitions. Defaults to true

  **cardOverlayEnabled** - Use this prop to have visible stack card overlays during transitions. Defaults to false.

  **transitionConfig** - Function to return an object that is merged with the default screen transitions (take a look at TransitionConfig in type definitions). Provided function will be passed the following arguments:

  **transitionProps** - Transition props for the new screen.

  **prevTransitionProps** - Transitions props for the old screen.

  **isModal** - Boolean specifying if screen is modal.

  **onTransitionStart** - Function to be invoked when the card transition animation is about to start.

  **onTransitionEnd** - Function to be invoked once the card transition animation completes.

  **transparentCard** - Experimental* - Prop to keep all cards in the stack visible and add a transparent background instead of a white one. This is useful to implement things like modal dialogs where the previous scene should still be visible underneath the current one.
