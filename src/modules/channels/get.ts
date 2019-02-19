import request from './../../common/request';

export interface Channel {
  channelId: string;
  thumbnail: string;
  title: string;
}

export interface SerializedChannel {
  channelId: string;
  thumbnailUrl: string;
  title: string;
}



export async function get(query: string): Promise<SerializedChannel[]> {
  const response: any = await request.get('/channels', {
    params: {
      q: query,
    },
  });
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
