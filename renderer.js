import React from 'react';
import avatar_sena from 'avatar-1.png';
import avatar_diep from 'avatar-1.png';
import {
  DiscordMessages,
  DiscordMessage,
  DiscordAttachment,
  DiscordMention
} from "@skyra/discord-components-react";

const avatar = {
  sena: avatar_sena,
  diep: avatar_diep
}

export default function Renderer(props) {
  return (
    <DiscordMessages style={{ minHeight: '90px' }} light-theme={props.light}>
      <DiscordMessage
        author="Zollo757347"
        avatar={avatar[props.avatar]}
        roleColor={props.color}
        timestamp={props.timestamp}
      >
        {""}
        {props.content}
        <div>
        {
        /\.(bmp|jpe?g|png|gif|webp|tiff)$/i.test(props.attachment) ?
          <DiscordAttachment
            slot="attachments"
            url={props.attachment}
            style={{ maxWidth: '256px' }}
            alt="attachment"
          /> : ""
        }
        </div>
      </DiscordMessage>
    </DiscordMessages>
  );
}
