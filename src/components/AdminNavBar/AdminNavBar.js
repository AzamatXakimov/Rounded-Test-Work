import { AdminNavBarInner, AdminNavBarItem, AdminNavBarLink, AdminNavBarLinkIconBox, AdminNavBarList } from "./AdminNavBar.styled"

export const AdminNavBar = () => {
    return <>
        <AdminNavBarInner>
            <AdminNavBarList>
                <AdminNavBarItem>
                    <AdminNavBarLink to="/admin" end>
                        <AdminNavBarLinkIconBox>
                            {/* <HomeIcon/> */}
                        </AdminNavBarLinkIconBox>
                        Buyurtmalar
                    </AdminNavBarLink>
                </AdminNavBarItem>
                <AdminNavBarItem>
                    <AdminNavBarLink to="customers">
                        <AdminNavBarLinkIconBox>
                            {/* <CustomersIcon/> */}
                        </AdminNavBarLinkIconBox>
                        Customers
                    </AdminNavBarLink>
                </AdminNavBarItem>
            </AdminNavBarList>
        </AdminNavBarInner>
    </>
}
