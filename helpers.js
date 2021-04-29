export const convertSuUsers = (data) => {
  const suUsers = data.map((item)=> (
    {
      username: item.email,
      name: `${item.first_name} ${item.last_name}`,
      company_ids: null,
      id: item.id,
      system_role_id: null,
      user_type: item.user_type
    }
  ))

  return suUsers
}