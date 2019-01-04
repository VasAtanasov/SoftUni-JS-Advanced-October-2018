function extractText() {
    let items = $("ul#items li")
        .toArray()
        .map(li => $(li).text())
        .join(", ");
    $("#result").text(items);
}
