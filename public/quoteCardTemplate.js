(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['quoteCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"quote-card\">\n    <div>\n        “"
    + alias4(((helper = (helper = lookupProperty(helpers,"quote") || (depth0 != null ? lookupProperty(depth0,"quote") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quote","hash":{},"data":data,"loc":{"start":{"line":3,"column":9},"end":{"line":3,"column":18}}}) : helper)))
    + "”\n    </div>\n    <div class=\"author\">\n        <i>Author -- "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":6,"column":21},"end":{"line":6,"column":31}}}) : helper)))
    + "</i>\n    </div>\n</section>\n";
},"useData":true});
})();