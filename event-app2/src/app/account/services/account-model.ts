// export const REGISTRATION_STEPS = [
//     {
//       header: 'registration.personalData',
//       controls: [
//         { type: 'checkbox', name: 'isCompany', label: 'Company' },
//         { type: 'text', name: 'firstName', label: 'First Name' },
//         { type: 'text', name: 'lastName', label: 'Last Name' },
//         { type: 'text', name: 'companyName', label: 'Company Name' },
//         { type: 'email', name: 'email', label: 'Email' },
//       ]
//     },
//     {
//       header: 'registration.addressData',
//       controls: [
//         { type: 'text', name: 'street', label: 'Street' },
//         { type: 'text', name: 'houseNumber', label: 'House Number' },
//         { type: 'text', name: 'apartmentNumber', label: 'Apartment Number' },
//         { type: 'text', name: 'postalCode', label: 'Postal Code' },
//         { type: 'text', name: 'city', label: 'City' },
//       ]
//     },
//     {
//       header: 'Header III',
//       controls: []
//     }
//   ];

 export interface Control {
    name: string;
    type: string;
    label: string;
    required: boolean;
    visible: boolean | (() => boolean);
    defaultValue: any;
  }
  
  export interface Step {
    header: string;
    controls: Control[];
  }