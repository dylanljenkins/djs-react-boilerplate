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
    };
}

export default IProperty;
