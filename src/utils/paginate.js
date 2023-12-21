export const paginate = (items, itemsPerPage, currentPage) => {
  return items.slice(
    itemsPerPage * (currentPage - 1),
    currentPage * itemsPerPage
  );
};
