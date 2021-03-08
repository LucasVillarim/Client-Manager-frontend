/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import api from 'services/api';
import { ListProps, UserProps } from 'interfaces';
import { useGlobal } from 'Context';
import { Table } from './styles';
import TooltipButtons from './tooltipButtons';

const List: React.FC<ListProps> = ({ searchData }) => {
  const { mainList, setMainList } = useGlobal();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/Main');
      setMainList(response.data);
    };
    fetchData();
  }, [setMainList]);

  const users = [...mainList]
    .filter((userList: UserProps) => {
      if (searchData === null) {
        return userList;
      }
      if (userList.name?.toLowerCase().includes(searchData.toLowerCase())) {
        return userList;
      }
      return null;
    })
    .map((user: UserProps) => {
      return (
        <tr className="row" key={user._id}>
          <td>{user.name}</td>
          <td>{user.contact}</td>
          <td>{user.company}</td>
          <td
            style={{
              color: user.situation === 'Finalizado' ? '#11C26D' : '#D73C3C',
            }}
          >
            {user.situation}
          </td>
          <td>
            <TooltipButtons data={user} />
          </td>
        </tr>
      );
    });

  return (
    <Table>
      <thead>
        <tr className="table-header">
          <th>Nome</th>
          <th>Contato</th>
          <th>Empresa</th>
          <th>Situação</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>{users.reverse()}</tbody>
    </Table>
  );
};

export default List;

// const handleCheck = (
//   user: UserProps,
//   e: React.ChangeEvent<HTMLInputElement>,
// ) => {
//   if (e.target.checked) {
//     const newArray = defaultList.map((listUser: UserProps) => {
//       return listUser._id === user._id
//         ? { ...user, isChecked: true }
//         : listUser;
//     });
//     setDefaultList(newArray);
//   } else {
//     const newArray = defaultList.map((listUser: UserProps) => {
//       return listUser._id === user._id
//         ? { ...user, isChecked: false }
//         : listUser;
//     });
//     setDefaultList(newArray);
//   }
// };

/* <td>
            <Checkbox
              checked={user.isChecked || false}
              onChange={checked => handleCheck(user, checked)}
            />
          </td> */
