import request, {utils} from './../../common/request';
import { Channel, SerializedChannel } from './get.interface';



export async function get(query: string): Promise<SerializedChannel[]> {
  const response: any = await request.get('/channels', {
    params: {
      q: query,
    },
  });
  return serialize(response.data);
}

export async function getTrending(): Promise<SerializedChannel[]> {
  const response: any = await utils.get('/trending');
  return serialize(response.data);
}

function serialize(channels: Channel[]): SerializedChannel[] {
  return channels.map((channel: Channel): SerializedChannel => {
    return {
      channelId: channel.channelId,
      thumbnailUrl: channel.thumbnail,
      title: channel.title,
    };
  });
}
