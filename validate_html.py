from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.lines = []
    def handle_starttag(self, tag, attrs):
        if tag in ["div", "section", "form", "ul", "li", "span", "footer", "header"]:
            self.stack.append((tag, self.getpos()[0]))
    def handle_endtag(self, tag):
        if tag in ["div", "section", "form", "ul", "li", "span", "footer", "header"]:
            if self.stack and self.stack[-1][0] == tag:
                self.stack.pop()
            else:
                pass # ignore unmatched

parser = MyHTMLParser()
with open("index.html") as f:
    html = f.read()
parser.feed(html)
for tag, line in parser.stack:
    print(f"Unclosed open tag: {tag} at line {line}")
