const DashboardLayout = ({children, users, revenue, notifications, login} : {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;

}) => {
    const isLogggedIn = false;
    if (!isLogggedIn) {
        return (
            <div>
                {login}
            </div>
        )
    }

  return (
    <div>
     <div>{children}</div>
     <div style={{display: 'flex'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
      <div>{users}</div>
      <div>{revenue}</div>
      </div>
      <div style={{display: 'flex', flex: 1 }}>{notifications}</div>
    </div>
   </div>
  );
};

export default DashboardLayout;