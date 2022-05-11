const employee =
{
    name: "Mark",
    address: "Colorado",
};

employee.name = "Mark";
employee.address = "Colorado";

function updateEmployeeWithKeyAndValue(object, key, value)
{
    const updatedEmployee = {...object};

    updatedEmployee[key] = value;

    return updatedEmployee;

    
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value)
{
    object[key] = value;
    
    return object;
}

function deleteFromEmployeeByKey(object, key)
{
    const updateEmployee = {...object};

    delete updateEmployee[key];

    return updateEmployee;

}

function destructivelyDeleteFromEmployeeByKey(object, key)
{
    delete object[key];

    return object;
}