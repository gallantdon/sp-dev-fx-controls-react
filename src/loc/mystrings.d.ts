declare interface IControlStrings {
  peoplePickerComponentTooltipMessage: string;
  peoplePickerComponentErrorMessage: string;
  peoplePickerComponentTitleText: string;
  peoplePickerSuggestionsHeaderText: string;
  genericNoResultsFoundText: string;
  peoplePickerLoadingText: string;


  SiteBreadcrumbLabel: string;
  ListViewGroupEmptyLabel: string;
  WebPartTitlePlaceholder: string;
  WebPartTitleLabel: string;
  DateTime:{[key: string]: string};
  SendEmailTo: string;
  StartChatWith: string;
  Contact: string;
  UpdateProfile: string;

  // Taxonomy picker
  TaxonomyPickerNoTerms: string;
  TaxonomyPickerExpandTitle: string;
  TaxonomyPickerMenuTermSet: string;
  TaxonomyPickerInLabel: string;
  TaxonomyPickerTermSetLabel: string;

  ListItemPickerSelectValue: string;

  ListItemAttachmentsActionDeleteIconTitle: string;
  ListItemAttachmentsactionDeleteTitle: string;
  ListItemAttachmentsfileDeletedMsg: string;
  ListItemAttachmentsfileDeleteError: string;
  ListItemAttachmentserrorLoadAttachments: string;
  ListItemAttachmentsconfirmDelete: string;
  ListItemAttachmentsdialogTitle: string;
  ListItemAttachmentsdialogOKbuttonLabel: string;
  ListItemAttachmentsdialogCancelButtonLabel: string;
  ListItemAttachmentsdialogOKbuttonLabelOnDelete: string;
  ListItemAttachmentsuploadAttachmentDialogTitle:string;
  ListItemAttachmentsuploadAttachmentButtonLabel:string;
  ListItemAttachmentsuploadAttachmentErrorMsg: String;
  ListItemAttachmentsCommandBarAddAttachmentLabel: string;
  ListItemAttachmentsloadingMessage: string;
  ListItemAttachmentslPlaceHolderIconText: string;
  ListItemAttachmentslPlaceHolderDescription: string;
  ListItemAttachmentslPlaceHolderButtonLabel: string;
}

declare module 'ControlStrings' {
  const strings: IControlStrings;
  export = strings;
}
