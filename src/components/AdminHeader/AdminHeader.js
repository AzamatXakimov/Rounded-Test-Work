import { AdminHeaderButton, AdminHeaderForm, AdminHeaderInner, AdminHeaderInput, AdminHeaderLabel, AdminHeaderLogoBox, AdminHeaderLogoLink, AdminHeaderProfileBox, AdminHeaderWrapper } from "./AdminHeader.styled"

export const AdminHeader = () => {
    return <>
        <AdminHeaderWrapper>
            <AdminHeaderLogoBox>
                <AdminHeaderLogoLink to="/admin">
                    Grape Admin Panel
                </AdminHeaderLogoLink>
            </AdminHeaderLogoBox>
            <AdminHeaderInner>
                <AdminHeaderForm>
                    <AdminHeaderLabel>
                        <AdminHeaderInput type="search"  aria-label="Search" placeholder="search"/>
                    </AdminHeaderLabel>
                </AdminHeaderForm>
                <AdminHeaderButton type="button">
                    <AdminHeaderProfileBox>

                    </AdminHeaderProfileBox>
                    John Doe
                </AdminHeaderButton>
            </AdminHeaderInner>
        </AdminHeaderWrapper>
    </>
}
