import { ThemedText } from "@/components/ThemedText"
import { FlatList, Image, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

type Person = {
  id: number
  name: string
  email: string
  image: string
}

const DUMMY_DATA: Person[] = [
  {
    id: 1,
    name: "Annnora Boughen",
    email: "aboughen0@abc.net.au",
    image: "http://dummyimage.com/300x300.png/cc0000/ffffff",
  },
  {
    id: 2,
    name: "Theadora Daggett",
    email: "tdaggett1@w3.org",
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
  },
  {
    id: 3,
    name: "Joanne Southers",
    email: "jsouthers2@whitehouse.gov",
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
  },
  {
    id: 4,
    name: "Weider Aldcorne",
    email: "waldcorne3@nps.gov",
    image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
  },
  {
    id: 5,
    name: "Tammi Wassell",
    email: "twassell4@youtube.com",
    image: "http://dummyimage.com/300x300.png/cc0000/ffffff",
  },
  {
    id: 6,
    name: "Tracie Chaikovski",
    email: "tchaikovski5@canalblog.com",
    image: "http://dummyimage.com/300x300.png/cc0000/ffffff",
  },
  {
    id: 7,
    name: "Mireille Vanderson",
    email: "mvanderson6@usda.gov",
    image: "http://dummyimage.com/300x300.png/cc0000/ffffff",
  },
  {
    id: 8,
    name: "Celisse Baston",
    email: "cbaston7@miitbeian.gov.cn",
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
  },
  {
    id: 9,
    name: "Gracie Melsom",
    email: "gmelsom8@bloglines.com",
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
  },
  {
    id: 10,
    name: "Glad Di Carlo",
    email: "gdi9@hhs.gov",
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
  },
  {
    id: 11,
    name: "Oberon Douse",
    email: "odousea@wordpress.org",
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
  },
  {
    id: 12,
    name: "Barnabas Faers",
    email: "bfaersb@google.co.jp",
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
  },
  {
    id: 13,
    name: "Benjamin Smartman",
    email: "bsmartmanc@ted.com",
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
  },
  {
    id: 14,
    name: "Guy MattiCCI",
    email: "gmatticcid@amazonaws.com",
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
  },
  {
    id: 15,
    name: "Nikki Drain",
    email: "ndraine@bloglines.com",
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
  },
  {
    id: 16,
    name: "Leigh O'Gleasane",
    email: "logleasanef@google.com",
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
  },
  {
    id: 17,
    name: "Arel Hender",
    email: "ahenderg@i2i.jp",
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
  },
  {
    id: 18,
    name: "Jerrome Lovejoy",
    email: "jlovejoyh@bluehost.com",
    image: "http://dummyimage.com/300x300.png/cc0000/ffffff",
  },
  {
    id: 19,
    name: "Arvie Crosser",
    email: "acrosseri@webnode.com",
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
  },
  {
    id: 20,
    name: "Lindie Mattielli",
    email: "lmattiellij@state.tx.us",
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
  },
  {
    id: 21,
    name: "Nani Cathie",
    email: "ncathiek@odnoklassniki.ru",
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
  },
  {
    id: 22,
    name: "Cayla Gilburt",
    email: "cgilburtl@wiley.com",
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
  },
  {
    id: 23,
    name: "Heath Kyles",
    email: "hkylesm@stanford.edu",
    image: "http://dummyimage.com/300x300.png/cc0000/ffffff",
  },
  {
    id: 24,
    name: "Fredek Castellanos",
    email: "fcastellanosn@mozilla.org",
    image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
  },
  {
    id: 25,
    name: "Fayre Tuison",
    email: "ftuisono@hibu.com",
    image: "http://dummyimage.com/300x300.png/cc0000/ffffff",
  },
]

const ListViewScreen = () => {
  const sortedData = DUMMY_DATA.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={sortedData}
        renderItem={({ item }) => <Item key={item.id} data={item} />}
        ListHeaderComponent={
          <ThemedText type="title" className="py-4 border-b">
            List View
          </ThemedText>
        }
        ItemSeparatorComponent={() => (
          <View className="border-b border-black/10" />
        )}
        className="px-8"
      />
    </SafeAreaView>
  )
}

export default ListViewScreen

interface ItemProps {
  data: Person
}

const Item = ({ data }: ItemProps) => {
  return (
    <View className="py-4 flex-row items-center gap-8">
      <Image source={{ uri: data.image }} className="size-20 rounded-full" />
      <View className="flex-1">
        <ThemedText type="defaultSemiBold">{data.name}</ThemedText>
        <Text>{data.email}</Text>
      </View>
    </View>
  )
}
