// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract MockToken is ERC721PresetMinterPauserAutoId {

    constructor() ERC721PresetMinterPauserAutoId("MockToken", "MT", "https://mocktoken.art/metadata/") {}

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
       return string(abi.encodePacked(super.tokenURI(tokenId),".json"));
    }
}