import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Add this import
import Colors from '../../../assets/Shared/Colors'; // Add this import

export default function DoctorCardItemAll() {
    const navigation = useNavigation(); // Initialize navigation
    const DoctorList = [
        {
            id: 1,
            name: 'Dr Martin',
            imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            type: 'Cardiologist',
            experience: 7
        },
        {
            id: 2,
            name: 'Dr Catherine',
            imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            type: 'Dentist',
            experience: 8
        },
        {
            id: 3,
            name: 'Dr Hanifa',
            imageUrl: 'https://img.freepik.com/premium-photo/portrait-arabic-female-doctor-modern-clinic-muslim-woman-wearing-hijab-glasses-white_321831-12443.jpg?w=900',
            type: 'Dentist',
            experience: 8
        },
        {
            id: 4,
            name: 'Dr Spurks',
            imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            type: 'Neurologist',
            experience: 20
        },
        {
            id: 5,
            name: 'Dr Rice',
            imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            type: 'Orthopaedic',
            experience: 20
        }
    ]

    return (
        <View style={{ marginTop: 10, marginBottom:20, paddingLeft: 10, paddingRight: 10}}>
            <FlatList
                data={DoctorList}
                showHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{backgroundColor:Colors.white, marginBottom: 10, marginTop:10, padding:10, borderRadius:5}}>
                        <TouchableOpacity style={{
                            marginBottom: 10,
                            width: "100%",
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                            }}>
                            <View>
                                <Image
                                    source={{ uri: item.imageUrl }}
                                    style={{
                                        width: 90,
                                        height: 90,
                                        borderRadius: 6,
                                        marginRight: 10
                                    }}
                                />
                             
                            </View>
                            <View style={{
                                backgroundColor: Colors.white,
                                paddingLeft: 5,
                                paddingRight: 5,
                                paddingBottom: 10,
                            }}>
                                <Text style={{ textAlign: 'center', marginTop: 5, fontFamily: 'appfont-semi', fontSize: 16 }}>
                                    {item.name}
                                </Text>
                                <Text style={{ textAlign: 'center', marginTop: 0, color: 'gray' }}>{item.type}</Text>
                                <Text style={{ textAlign: 'center', marginBottom: 15, color: Colors.PRIMARY }}>{item.experience} Years</Text>
                            </View>
                        </TouchableOpacity>

                        <View>
                            <TouchableOpacity style={{
                                padding: 10,
                                backgroundColor: Colors.SECONDARY,
                                borderRadius: 10,
                                left: 0,
                                right: 0,
                                zIndex: 20,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontFamily: 'appfont-semi',
                                    fontSize: 17,
                                }}>Make an Appointment</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}


{/* <View>
<View style={{
    marginBottom: 10,
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.GRAY,
    }}>
    <View>
        <TouchableOpacity>
            <Image
                source={{ uri: item.imageUrl }}
                style={{
                    width: "100%",
                    height: 140,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}
            />
        </TouchableOpacity>
    </View>
    <View style={{
        backgroundColor: Colors.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
    }}>
        <Text style={{ textAlign: 'center', marginTop: 5, fontFamily: 'appfont-semi', fontSize: 18 }}>
            {item.name}
        </Text>
        <Text style={{ textAlign: 'center', marginTop: 5, color: 'gray' }}>{item.type}</Text>
        <Text style={{ textAlign: 'center', marginTop: 5, color: 'gray' }}>{item.experience}</Text>
    </View>
</View>
<View>
    <TouchableOpacity style={{
        padding: 10,
        backgroundColor: Colors.PRIMARY,
        margin: 10,
        borderRadius: 99,
        left: 0,
        right: 0,
        marginBottom: 10,
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <Text style={{
            textAlign: 'center',
            fontFamily: 'appfont-semi',
            fontSize: 17,
        }}>Make an Appointment</Text>
    </TouchableOpacity>
</View>
</View> */}

