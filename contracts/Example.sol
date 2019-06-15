pragma solidity ^0.5.8;

/**
 * @title An example contract
 * @author nya1
 * @notice Used only to show how tests are working (see test folder)
 */
contract Example {
    string public myString = "INITIAL";

    /**
     * @dev Change `myString` variable
     * @param newStr New string
     */
    function changeString (string memory newStr) public {
        require(bytes(newStr).length < 100, "String should be less than 100 characters");
        myString = newStr;
    }
}
