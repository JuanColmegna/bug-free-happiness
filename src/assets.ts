import type { ResolverManifest } from "pixi.js";

export const manifest:ResolverManifest = {
    bundles: [
        {
            name : "star",
            assets:
            {
                "star1" : "../static/star/star1.png",
                "star2" : "../static/star/star2.png",
                "star3" : "../static/star/star3.png",
            }
        },
        // {
        //     name : "another bundle",
        //     assets:
        //     {
        //         "whistle" : "./whistle.mp3",
        //     }
        // },
    ]
}
