import React from 'react'
import { useTranslation } from 'react-i18next';

function Dashboard() {
  const { t, i18n } = useTranslation();
  return (
    <div>{t("Dashboard")}</div>
  )
}

export default Dashboard