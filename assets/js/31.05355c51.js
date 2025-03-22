(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{344:function(t,a,s){"use strict";s.r(a);var e=s(25),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"december-2022"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#december-2022"}},[t._v("#")]),t._v(" December, 2022")]),t._v(" "),a("h2",{attrs:{id:"asciinema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asciinema"}},[t._v("#")]),t._v(" ASCIInema")]),t._v(" "),a("p",[t._v("ASCIInema is a command-line tool which allows the user to record interactions and outputs in a ANSI compatible terminal. When you run asciinema rec in your terminal the recording starts, capturing all output that is being printed to your terminal while you’re issuing the shell commands. When the recording finishes (by hitting Ctrl-D or typing exit) then the captured output is uploaded to asciinema.org website and prepared for playback on the web by default.")]),t._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("h4",{attrs:{id:"on-fedora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-fedora"}},[t._v("#")]),t._v(" On Fedora")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo dnf install -y asciinema\n")])])]),a("h4",{attrs:{id:"on-debian-ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-debian-ubuntu"}},[t._v("#")]),t._v(" On Debian/Ubuntu")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt install -y asciinema\n")])])]),a("h4",{attrs:{id:"with-homebrew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-homebrew"}},[t._v("#")]),t._v(" With Homebrew")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("brew install asciinema\n")])])]),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h4",{attrs:{id:"record-and-upload-to-asciinema-org"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#record-and-upload-to-asciinema-org"}},[t._v("#")]),t._v(" Record and upload to asciinema.org")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("asciinema rec\n")])])]),a("h4",{attrs:{id:"record-to-local-cast-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#record-to-local-cast-file"}},[t._v("#")]),t._v(" Record to local cast file")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("asciinema rec path/to/output.cast\n")])])]),a("h4",{attrs:{id:"adding-a-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-title"}},[t._v("#")]),t._v(" Adding a title")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("asciinema rec path/to/output.cast -t 'My super cool CLI recording'\n")])])]),a("h3",{attrs:{id:"publishing-to-the-web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishing-to-the-web"}},[t._v("#")]),t._v(" Publishing To The Web")]),t._v(" "),a("p",[t._v("You can also record to a local file and add that file to your own web site using the asciinema-player JavaScript and CSS modules. I have added those capabilities to the KYOSS VuePress site for this purpose. By recording to a local "),a("code",[t._v("cast")]),t._v(" file, you can then place that file in "),a("code",[t._v("docs/.vuepress/public/casts")]),t._v(" and reference it using the asciinema component I added for VuePress as shown below:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<asciinema :src=\"$withBase('/casts/2022-december-asciinema.cast')\" cols=120 rows=30 />\n")])])]),a("p",[t._v("This results in the following:")]),t._v(" "),a("asciinema",{attrs:{src:t.$withBase("/casts/2022-december-asciinema.cast"),cols:"120",rows:"30"}}),t._v(" "),a("h3",{attrs:{id:"some-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-considerations"}},[t._v("#")]),t._v(" Some Considerations")]),t._v(" "),a("p",[t._v("Some things to keep in mind. If you are using, as I am, custom fonts for your terminal you will need to add those custom fonts to your web site using CSS as we see in the snippets from the ASCIInema CSS I customized below:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" OverpassMonoNF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'/fonts/Overpass_Mono_NerdFont.otf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'opentype'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// SNIP\n\n.asciinema-terminal")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("white-space")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("word-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("word-break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" solid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("cursor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.5em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" OverpassMonoNF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" monospace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.3333333333em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n// SNIP\n")])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);