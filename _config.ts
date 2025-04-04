import lume from "lume/mod.ts";

import inline from "lume/plugins/inline.ts";
import minifyHTML from "lume/plugins/minify_html.ts";

const site = lume({
    src: "./public",
    dest: "./dist"
});

site.use(inline(/* Options */))
    .use(minifyHTML(/* Options */));

export default site;
