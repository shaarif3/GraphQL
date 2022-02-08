import React, { useEffect, useState } from 'react';
import axios from 'axios';
const LearningGraphQL = () => {
  let query = `query{
        productCollection{
            items{
                name
                age
                fatherName
            }
        }
    }`;
  const [data, setData] = useState(null);
  let URL = `https://graphql.contentful.com/content/v1/spaces/ht61t6ttzpey?access_token=NG-0figwafMMFQB-2rBSi3xTCE0mFyddSoOIz3SDkwU`;
  useEffect(async () => {
    try {
      let res = await axios.post(URL, { query });
      //   console.log(res.data.data.productCollection.items);
      setData(res.data.data.productCollection.items);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!data) return <div>...Loading</div>;

  return (
    <div>
      {data.map((item, index) => (
        <div style={{ display: 'flex' }} key={index}>
          <p>{item.name} </p>
          <p> {item.fatherName}</p>
          <p> {item.age}</p>
        </div>
      ))}
    </div>
  );
};

export default LearningGraphQL;
