export const getStoredTenant = () => {
  const tenant = localStorage.getItem('imoai_tenant');
  return tenant ? JSON.parse(tenant) : null;
};

export const setStoredTenant = (tenantData) => {
  localStorage.setItem('imoai_tenant', JSON.stringify(tenantData));
};

export const clearStoredTenant = () => {
  localStorage.removeItem('imoai_tenant');
};
