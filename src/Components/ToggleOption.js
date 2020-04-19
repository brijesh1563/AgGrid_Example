import React, { Component } from 'react'
import { EuiPopover, EuiSwitch, EuiSpacer, EuiButtonIcon } from '@elastic/eui';

class ToggleOption extends Component {
 
    render() {
        const {
            isFirstname, isLastname, isBranch, isConatct, isEmail, isAction, isTags, PopOver, closePopover, displayPopOver, isOpen } = this.props;
        console.log(PopOver)
        return (
            <>
                <EuiPopover
                    ownFocus
                    button={<EuiButtonIcon
                        iconType="managementApp"
                        iconSize="original"
                        onClick={PopOver}
                    >
                    </EuiButtonIcon>}
                    isOpen={isOpen}
                    closePopover={closePopover}
                >
                    <div>
                        <EuiSwitch
                            label="Firstname"
                            checked={isFirstname}
                            onChange={e => displayPopOver(e.target.checked, 'firstname', "isFirstname")}
                        />
                        <EuiSpacer size="s" />
                        <EuiSwitch
                            label="Lastname"
                            checked={isLastname}
                            onChange={e => displayPopOver(e.target.checked, 'lastname', "isLastname")}
                        />
                        <EuiSpacer size="s" />
                        <EuiSwitch
                            label="Branch"
                            checked={isBranch}
                            onChange={e => displayPopOver(e.target.checked, 'branch', "isBranch")}
                        />
                        <EuiSpacer size="s" />
                        <EuiSwitch
                            label="Contact"
                            checked={isConatct}
                            onChange={e => displayPopOver(e.target.checked, 'contact', "isConatct")}
                        />
                        <EuiSpacer size="s" />
                        <EuiSwitch
                            label="Email"
                            checked={isEmail}
                            onChange={e => displayPopOver(e.target.checked, 'email', "isEmail")}
                        />
                        <EuiSpacer size="s" />
                        <EuiSwitch
                            label="Action"
                            checked={isAction}
                            onChange={e => displayPopOver(e.target.checked, 'action', "isAction")}
                        />
                        <EuiSpacer size="s" />
                        <EuiSwitch
                            label="Tags"
                            checked={isTags}
                            onChange={e => displayPopOver(e.target.checked, 'tags', "isTags")}
                        />
                    </div >
                </EuiPopover>
            </>
        )
    }
}

export default ToggleOption
