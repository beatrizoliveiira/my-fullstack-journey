"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[9924],{7068:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var r=a(7294),l=a(6010),n=a(9960),c=a(2263),o=["zero","one","two","few","many","other"];function s(e){return o.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function u(){var e=(0,c.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:s(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),i}var t,a}),[e])}function g(){var e=u();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}var m=a(1944),d=a(5281),p=a(5999),h=a(3748),f=a(197);function E(e){var t=e.doc;return r.createElement("article",{className:"margin-vert--lg"},r.createElement(n.Z,{to:t.permalink},r.createElement("h2",null,t.title)),t.description&&r.createElement("p",null,t.description))}function v(e){var t,a=e.tag,c=(t=g().selectMessage,function(e){return t(e,(0,p.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),o=(0,p.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:c(a.count),tagName:a.label});return r.createElement(m.FG,{className:(0,l.Z)(d.k.wrapper.docsPages,d.k.page.docsTagDocListPage)},r.createElement(m.d,{title:o}),r.createElement(f.Z,{tag:"doc_tag_doc_list"}),r.createElement(h.Z,null,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("main",{className:"col col--8 col--offset-2"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,o),r.createElement(n.Z,{href:a.allTagsPath},r.createElement(p.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),r.createElement("section",{className:"margin-vert--lg"},a.items.map((function(e){return r.createElement(E,{key:e.id,doc:e})}))))))))}}}]);