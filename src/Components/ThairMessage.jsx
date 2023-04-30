const ThairMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.userName !== message.sender.userName;

  console.log("Message : ", message?.sender?.avatar);

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
      )}
      {message.attachments && message.attachments.length > 0
        ? (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          />
        )
        : (
          <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
            {message.text}
          </div>
        )}
      
    </div>
  );
};

export default ThairMessage;
/*

{message?.attachments?.length > 0 ? (
            <img
              src={message.attachments[0].file}
              alt="none-images"
              className="message-image"
              style={{ float: "right" }}
            />
            ) : (
              <div
                className="message"
                style={{
                  float: "right",
                  marginRight: "18px",
                  color: "white",
                  backgroundColor: "#3B2A50",
                }}
                >
                {message.text}
              </div>
            )
        }

*/