interface IProperty {
    title: string;
    location: {
        address: string;
        // subNumber: number;
        // number: number;
        // street: string;
        // suburb: string;
        // state: AusState;
        // postcode: number;
    };
    details: {
        price: number;
        beds: number;
        parks: number;
        size: number;
    };
}

export default IProperty;
