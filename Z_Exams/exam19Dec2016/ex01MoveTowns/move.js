function move(direction) {
    let selected = $('select#towns option:selected');

    switch (direction) {
        case 1:
            selected.next().insertBefore(selected);
            break;
        case -1:
            selected.prev().insertAfter(selected);
            break;
    }
}