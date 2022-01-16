
export const randomAnimationsScreen = () => {
    const key = Math.floor(Math.random() * 4);
    switch (key) {
        case 0:
            // Use the platform default animation:
            return "default";
        case 1:
            //Fade screen in or out:
            return "fade";
        case 2:
            //Flip the screen, requires stackPresentation: "modal" (iOS only)
            return "flip";
        case 3:
            //Slide in the new screen from right (Android only, uses default animation on iOS)
            return "slide_from_right";
        case 4:
            //Slide in the new screen from left (Android only, uses default animation on iOS)
            return "slide_from_left";
    }
}