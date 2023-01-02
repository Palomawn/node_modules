exports.getAllUser = function(page, items) {
    page = (page < 1 ? 1 : page) || 1;
    items = (items < 1 ? 5 : items) || 5;
    var indexStart, indexEnd;
    indexStart = (page - 1) * items;
    indexEnd = indexStart + items;
    return users.slice(indexStart, indexEnd);
  };