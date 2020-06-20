// SPDX-License-Identifier: MIT
pragma solidity >0.5.0;

contract Storage{
    string public name = "test contract";
    function getName()public view returns(string memory){
        return name;
    }
}