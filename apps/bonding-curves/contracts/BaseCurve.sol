// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

/**
 * @title  BaseCurve
 * @author 0xIntuition
 * @notice Abstract contract for a bonding curve. Defines the interface for converting assets to shares and vice versa.
 */
abstract contract BaseCurve {
    string public name;

    /// @notice Abstract function to convert assets to shares
    ///
    /// @param assets Quantity of assets to stake into the curve
    /// @param totalShares Total quantity of shares already awarded by the curve
    /// @param totalAssets Total quantity of assets already staked into the curve
    /// @return shares The number of shares equivalent to the given assets
    function assetsToShares(uint256 assets, uint256 totalShares, uint256 totalAssets)
        external
        view
        virtual
        returns (uint256);

    /// @notice Abstract function to convert shares to assets
    ///
    /// @param shares Quantity of shares to redeem from the curve
    /// @param totalShares Total quantity of shares already awarded by the curve
    /// @param totalAssets Total quantity of assets already staked into the curve
    /// @return assets The number of assets equivalent to the given shares
    function sharesToAssets(uint256 shares, uint256 totalShares, uint256 totalAssets)
        external
        view
        virtual
        returns (uint256);

    /// @notice Construct the curve with a unique name
    ///
    /// @param _name Unique name for the curve
    constructor(string memory _name) {
        name = _name;
    }
} 