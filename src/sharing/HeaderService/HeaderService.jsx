import { CountVisitor } from "sharing/CountVisitor/CountVistor";
import styles from "./HeaderService.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import {
  SortedEmojis,
  EmojiExpantion,
  ReactionPopoverButton,
  ShareButton,
} from "sharing";

const cx = classNames.bind(styles);

export function HeaderService({
  name,
  recentMessages,
  messageCount,
  reactions,
  id,
}) {
  const [newReactions, setNewReactions] = useState(reactions);

  return (
    <div className={cx("container")}>
      <div className={cx("Header-service")}>
        <p className={cx("name")}>To.{name}</p>
        <div className={cx("post-info")}>
          <CountVisitor
            recentMessages={recentMessages}
            messageCount={messageCount}
          />
          <p className={cx("message-count")}>{messageCount}</p>명이 작성했어요!
          <div className={cx("partition28px")}></div>
          <SortedEmojis topReactions={newReactions} />
          <EmojiExpantion reactions={newReactions} />
          <ReactionPopoverButton
            id={id}
            setReactions={setNewReactions}
            newReactions={newReactions}
          />
          <div className={cx("partition13px")}></div>
          <ShareButton />
        </div>
      </div>
    </div>
  );
}
