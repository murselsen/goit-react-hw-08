export const selectContacts = (state) => state.contants.items;
export const selectIsLoading = (state) => state.contants.isLoading;
export const selectError = (state) => state.contants.error;
export const selectFilteredContacts = (state) => {
  const contacts = selectContacts();
  const filterType = state.filters.type.toLowerCase();
  const filterValue = state.filters.value.toLowerCase();

  switch (filterType) {
    case "name":
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterValue)
      );
    case "phone":
      return contacts.filter((contact) =>
        contact.phone.toLowerCase().includes(filterValue)
      );
    default:
      return contacts;
  }
};
