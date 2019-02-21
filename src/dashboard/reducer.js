const data = [{
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    },
    {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, 
    {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, 
    {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, 
    {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, 
    {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, 
    {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, 
    {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, 
    {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, 
    {
        'Service': 'foo',
        'Unit': null,
        'Cost/Unit': undefined,
        'Units Requested': 42
}];

const dashboardInitialState = {
    data
};

const dashboardReducer = (state = dashboardInitialState, action) => {
    switch (action.type) {        
        default:
          return state
    }
};

export default dashboardReducer;