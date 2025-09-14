function r(e){return e<1e4?e.toString():e<1e8?(e/1e4).toFixed(1).replace(/\.0$/,"")+"万":(e/1e8).toFixed(1).replace(/\.0$/,"")+"亿"}export{r as f};
