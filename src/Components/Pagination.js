import React, { useState } from 'react';

import {
    EuiButtonEmpty,
    EuiContextMenuItem,
    EuiContextMenuPanel,
    EuiFlexGroup,
    EuiFlexItem,
    EuiPopover,
} from '@elastic/eui';
export default (props) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const { rowPerPage, pageCount } = props;
    let rowCount = rowPerPage;
    const PAGE_COUNT = pageCount;
    const onButtonClick = () => setIsPopoverOpen(isPopoverOpen => !isPopoverOpen);
    const closePopover = (pageSize) => {
        setIsPopoverOpen(false);
        props.callbackPagination(pageSize)

    };

    const goToPage = pageNumber => {
        setActivePage(pageNumber);
        props.goToPage(pageNumber);
    }

    const button = (
        <EuiButtonEmpty
            size="s"
            color="text"

            iconType="arrowDown"
            iconSide="right"
            onClick={onButtonClick}>
            Rows per page:{rowCount}
        </EuiButtonEmpty>
    );

    const items = [
        <EuiContextMenuItem
            key="5 rows"
            icon="empty"
            onClick={() => {
                rowCount = 5;
                closePopover(5);

            }}>
            5 rows
    </EuiContextMenuItem>,
        <EuiContextMenuItem
            key="10 rows"
            icon="empty"
            onClick={() => {
                closePopover(10);

            }}>
            10 rows
    </EuiContextMenuItem>,
        <EuiContextMenuItem
            key="15 rows"
            icon="none"
            onClick={() => {
                closePopover(15);

            }}>
            15 rows
    </EuiContextMenuItem>,
        <EuiContextMenuItem
            key="20 rows"
            icon="empty"
            onClick={() => {
                closePopover(20);

            }}>
            20 rows
    </EuiContextMenuItem>,
    ];
    return (
        <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
            <EuiFlexItem grow={false}>
                <EuiPopover
                    button={button}
                    isOpen={isPopoverOpen}
                    closePopover={closePopover}
                    panelPaddingSize="none">
                    <EuiContextMenuPanel items={items} />
                </EuiPopover>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
            </EuiFlexItem>
        </EuiFlexGroup>
    );
};