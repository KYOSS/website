# December, 2022

## ASCIInema

ASCIInema is a command-line tool which allows the user to record interactions and outputs in a ANSI compatible terminal. When you run asciinema rec in your terminal the recording starts, capturing all output that is being printed to your terminal while you’re issuing the shell commands. When the recording finishes (by hitting Ctrl-D or typing exit) then the captured output is uploaded to asciinema.org website and prepared for playback on the web by default.

### Installation

#### On Fedora
```
sudo dnf install -y asciinema
```

#### On Debian/Ubuntu
```
sudo apt install -y asciinema
```

#### With Homebrew
```
brew install asciinema
```

### Usage

#### Record and upload to asciinema.org

```
asciinema rec
```

#### Record to local cast file

```
asciinema rec path/to/output.cast
```

#### Adding a title

```
asciinema rec path/to/output.cast -t 'My super cool CLI recording'
```

### Publishing To The Web

You can also record to a local file and add that file to your own web site using the asciinema-player JavaScript and CSS modules. I have added those capabilities to the KYOSS VuePress site for this purpose. By recording to a local `cast` file, you can then place that file in `docs/.vuepress/public/casts` and reference it using the asciinema component I added for VuePress as shown below:

```
<asciinema :src="$withBase('/casts/2022-december-asciinema.cast')" cols=120 rows=30 />
```

This results in the following:

<asciinema :src="$withBase('/casts/2022-december-asciinema.cast')" cols=120 rows=30 />

### Some Considerations

Some things to keep in mind. If you are using, as I am, custom fonts for your terminal you will need to add those custom fonts to your web site using CSS as we see in the snippets from the ASCIInema CSS I customized below:

```css
@font-face {
  font-family: OverpassMonoNF;
  src: url('/fonts/Overpass_Mono_NerdFont.otf') format('opentype');
}

// SNIP

.asciinema-terminal {
  box-sizing: content-box;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  overflow: hidden;
  padding: 0;
  margin: 0px;
  display: block;
  white-space: pre;
  border: 0;
  word-wrap: normal;
  word-break: normal;
  border-radius: 0;
  border-style: solid;
  cursor: text;
  border-width: 0.5em;
  font-family: OverpassMonoNF, monospace;
  line-height: 1.3333333333em;
}

// SNIP
```