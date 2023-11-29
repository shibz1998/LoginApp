import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import {initializeSslPinning} from 'react-native-ssl-public-key-pinning';

initializeSslPinning({
  'themoviedb.org': {
    includeSubdomains: true,
    publicKeyHashes: [
      // '12342YHvdHR3tJYmQIr0Paosp6t/nggsEGD4QJZ3Q0g=', //Non Working Key
      // '47DEdgffdgfdgfdgfdgfdgfdgdfgfdNMpJWZG3hSuFU=', //Non Working Key
      '5VLcahb6x4EvvFrCF2TePZulWqrLHS2jCg9Ywv6JHog=', //Working Key
      '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=', //Working Key
    ],
  },
})
  .then(success => {
    console.log(success);
  })
  .catch(err => {
    console.log(err);
  });

const SSLPinningScreen = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzJjOTYzNjY5NzU3OGEwNTI5MWM4NWE5MWYyNmFmMSIsInN1YiI6IjY1NDM4MzM0ZTFhZDc5MDE0YmQyMGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.huykm4g9c8OAVMFXGW498rMtzZJT2XYKunRmZvinG70';

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };

    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&limit=50',
        {headers},
      )
      .then(response => {
        setData(response.data.results || []); // Use response.data.results
        setLoading(false);
      })
      .catch(err => console.log(err));
    setLoading(false);
  }, []);

  return (
    <View style={{alignItems: 'center'}}>
      <Text>SSL PINNING SCREEN</Text>

      {/* {!loading && data.map(item => <Text key={item.id}>{item.title}</Text>)} */}

      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{margin: 5, backgroundColor: 'lightblue'}}>
              <Text style={{color: 'red'}}>{item.title}</Text>
              <Text>{item.original_title}</Text>
              <Text>{item.overview}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SSLPinningScreen;

// import React, {useState, useEffect} from 'react';
// import {View, Text, FlatList} from 'react-native';
// import {create} from 'apisauce';
// import {initializeSslPinning} from 'react-native-ssl-public-key-pinning';

// initializeSslPinning({
//   'themoviedb.org': {
//     includeSubdomains: true,
//     publicKeyHashes: [
//       // '5VLcahb6x4EvvFrCF2TePZulWqrLHS2jCg9Ywv6JHog=',
//       // '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
//       // 'QXnt2YHvdHR3tJYmQIr0Paosp6t/nggsEGD4QJZ3Q0g=',
//       '12342YHvdHR3tJYmQIr0Paosp6t/nggsEGD4QJZ3Q0g=',
//       'mEflZT5enoR1FuXLgYYGqnVEoZvmf9c2bVBpiOjYQ0c=',
//     ],
//   },
// })
//   .then(success => {
//     console.log(success);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const api = create({
//   baseURL: 'https://api.themoviedb.org/3',
// });

// const SSLPinningScreen = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const apiKey =
//       'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzJjOTYzNjY5NzU3OGEwNTI5MWM4NWE5MWYyNmFmMSIsInN1YiI6IjY1NDM4MzM0ZTFhZDc5MDE0YmQyMGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.huykm4g9c8OAVMFXGW498rMtzZJT2XYKunRmZvinG70';

//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${apiKey}`,
//     };

//     api
//       .get('/movie/popular', null, {headers})
//       .then(response => {
//         setData(response.data.results || []); // Use response.data.results
//         setLoading(false);
//       })
//       .catch(err => console.log('error' + err));
//     setLoading(false);
//   }, []);

//   return (
//     <View style={{alignItems: 'center'}}>
//       <Text>SSL PINNING SCREEN</Text>

//       <FlatList
//         data={data}
//         renderItem={({item, index}) => {
//           return (
//             <View style={{margin: 5, backgroundColor: 'lightblue'}}>
//               <Text style={{color: 'red'}}>{item.title}</Text>
//               <Text>{item.original_title}</Text>
//               <Text>{item.overview}</Text>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// export default SSLPinningScreen;
