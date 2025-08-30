const { createClass, h } = CMS;

// Inline CSS für Preview
const inlineStyle = `
  article {
    font-family: Arial, sans-serif;
    max-width: 700px;
    margin: 2rem auto;
    line-height: 1.6;
    color: #222;
  }
  h1 { color: #111; }
  p { color: #333; }
  img { max-width: 100%; height: auto; margin-top: 1rem; }
`;

// CSS direkt im Preview registrieren
CMS.registerPreviewStyle(inlineStyle, { raw: true });

// Blog Preview
const BlogPreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const title = entry.getIn(["data", "title"]);
    const date = entry.getIn(["data", "date"]);
    const body = this.props.widgetFor("body");
    const cover = this.props.getAsset(entry.getIn(["data", "cover"]));

    return h("article", {},
      h("h1", {}, title),
      h("p", {}, h("em", {}, date)),
      h("div", {}, body),
      cover && h("img", { src: cover.toString() })
    );
  }
});

// Collection Preview registrieren
CMS.registerPreviewTemplate("blog", BlogPreview);
