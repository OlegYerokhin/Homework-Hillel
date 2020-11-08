const salaries = {
     HRs: { 
        Alice: 500, 
        Bob: 700  
    },
    Devs: { 
        Carol: 2500, 
        Carlos: 1000, 
        Charles: 1500 
    },
    QAs: { 
        Chuck: 1650, 
        Craig: 850, 
        Dave: 3000
    }
};

const anotherSalaries = {
    ...salaries,
        HRs: {
            ...salaries.HRs
        },
        Devs: {
            ...salaries.Devs
        },
        QAs: {
            ...salaries.QAs
        }
}

for(let key in anotherSalaries.HRs) {
    if (typeof anotherSalaries.HRs[key] == 'number') {
        anotherSalaries.HRs[key] *= 2;
    }
}
for(let key in anotherSalaries.Devs) {
    if (typeof anotherSalaries.Devs[key] == 'number') {
        anotherSalaries.Devs[key] *= 2;
    }
}
for(let key in anotherSalaries.QAs) {
    if (typeof anotherSalaries.QAs[key] == 'number') {
        anotherSalaries.QAs[key] *= 2;
    }
}
console.log(anotherSalaries)