// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import {BaseCurve} from "./BaseCurve.sol";
import {FixedPointMathLib} from "solady/utils/FixedPointMathLib.sol";

/**
 * @title  LinearCurve
 * @author 0xIntuition
 * @notice Models a linear curve. The number of shares awarded is directly proportional to the number of assets staked.
 *         This is the simplest curve possible, and was used by the project before the introduction of more complex curves.
 */
contract LinearCurve is BaseCurve("Linear Curve") {
    using FixedPointMathLib for uint256;

    /// @notice Convert assets to shares using a linear relationship
    ///
    /// @param assets Quantity of shares to redeem from the linear curve
    /// @param totalShares Total quantity of shares already awarded by the linear curve
    /// @param totalAssets Total quantity of assets already staked into the linear curve
    /// @return shares The number of shares equivalent to the given assets
    function assetsToShares(uint256 assets, uint256 totalShares, uint256 totalAssets)
        external
        pure
        override
        returns (uint256)
    {
        return totalShares == 0 ? assets : assets.mulDiv(totalShares, totalAssets);
    }

    /// @notice Convert shares to assets using a linear relationship
    ///
    /// @param shares Quantity of shares to redeem from the linear curve
    /// @param totalShares Total quantity of shares already awarded by the linear curve
    /// @param totalAssets Total quantity of assets already staked into the linear curve
    /// @return assets The number of assets equivalent to the given shares
    function sharesToAssets(uint256 shares, uint256 totalShares, uint256 totalAssets)
        external
        pure
        override
        returns (uint256)
    {
        return totalShares == 0 ? shares : shares.mulDiv(totalAssets, totalShares);
    }
}
