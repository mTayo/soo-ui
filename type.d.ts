
type TextInputProps = {
    value: string;
    onChange?: function;
    errorMessage: string | null;
    showErrorMessage?: boolean | string;
    styleProps?: object| Array;
    keyboardType: string;
    placeholder: string;
    name: string
};

type PasswordProps = {
    passwordValue: string;
    confirmPasswordValue: string;
    onPasswordChange: function;
    onConfirmPasswordChange: function;
    errorMessage:Array<string>;
    confirmPasswordErrorMessage:Array<string>;
    showErrorMessage?: boolean | string;
    styleProps?: object| Array;
    keyboardType: string;
    confirmPassowrdPlaceholder: string;
    passwordPlaceholder: string;
    name: string
    confirmPasswordName: string
};

type SelectInputProps = {
    styleProps?: object| Array;
    data: Array<{value: string, label:string, date: string, address: string}>;
    errorMessage: string | null;
    showErrorMessage?: boolean | string;
    placeholder: string;
    name: string;
    value: string;
    onChange?: function;
}

type PageTitleType = {
    text: string;
    children?: any;
};

type CheckBoxType = {
    onChange?: function;
    value: boolean;
    children?: any;
};

type ModalProps = {
    children:  React.ReactNode;
    modalVisible: boolean;
    toggleModal: function;
};
type competitionDataProps ={
    value: string;
    label: string;
    date: string;
    address: string;
    bgColor?: string;
};
type NavigationPressableProps ={

    styleProps?: object| Array;
    placeholder: string, 
    showErrorMessage: boolean
    errorMessage: string | null;
    value: string
};



// type ButtonPropsType = {
//     text?: string;
//     type?: string;
//     action: function;
//     className?: string;
//     icon?: any;
//     isLoading?: boolean;
//     disabled?: boolean;
//     animateClass?: string;
// };

// type ModalPropsType = {
//     header?: string;
//     children?: JSX.Element;
//     toogle: function;
//     accept?: Function;
//     className?: string;
//     show?: boolean;
//     headerClass?: string;
//     modalHeaderClass?: string;
//     size?: string;
// };

// type CheckBoxPropsType = {
//     action: function;
//     className?: string;
//     label?: string;
// };
// // Badges
// type BadgeType = {
//     text?: string;
//     type: string;
//     handleClick?: function;
//     className?: string;
//     capitalize?: boolean;
// };

// type InfoDivType = {
//     text: string | JSX.Element;
//     text2?: string | JSX.Element;
//     label: string;
//     labelClass?: string;
//     textClass?: string;
//     handleClick?: function;
// };

// type AvatarProps = {
//     name: string | JSX.Element;
//     secondaryText?: string | JSX.Element;
//     img: any;
// };

// type ColorPickerProps = {
//     label: string | JSX.Element;
//     action: function;
//     name?: string;
//     defaultColor?: string;
//     labelClass?: string;
// };

// type StoreFormProps = {
//     onSubmit: function;
//     payload: any;
//     loading: boolean;
// };
// type DashboardCardProps = {
//     label: string;
//     value: string | number;
//     icon: any;
//     hasBadge?: boolean;
//     growth?: boolean;
// };
// type EmptyStateProps = {
//     header: string;
//     secondaryText: string;
//     icon: any;
//     buttonText: string;
//     btnAction: Function;
//     extraHeaderClass?: string;
//     btnIcon?: any;
// };
// type AppContextType = {
//     cards: Array<any>;
//     addresses: Array<any>;
//     businesses: Array<any>;
//     contacts: Array<any>;
//     stores: Array<any>;
//     apiKeys: Array<any>;
//     users: Array<any>;
//     trackings: Array<any>;
//     notifications: any;
//     invitations: Array<any>;
//     stores: Array<any>;
//     tokens: Array<any>;
//     webhooks: Array<any>;
//     products: any;
//     allCouriers: Array<any>;
//     storeLocations: Array<any>;
//     deliveryCategories: Array<any>;
//     orderBulkData: Object<any>;
//     update: Function;
//     selectedBusiness: string;
//     getBusinessInfo: Function;
//     newCampaignName: string;
//     selectedSMSCampaignTemplate: number | null;
//     recurringOrderData: Object<any>;
//     importedOrder: Object<any>;
//     sideBarType: string;
//     selectedStoreObj: any;
//     // campaigns: Array<any>;
// };
